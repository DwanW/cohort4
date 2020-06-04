from openpyxl import load_workbook
import os
import datetime

## data validation
def validateData(directory, filename):

    isDataValid = False
    ws_list = ["customer", "invoice", "invoice_list", "product"]
    missing_ws_list = []

    try:
        path = os.path.join(directory, filename)
        wb = load_workbook(path)

        for name in ws_list:
            if name in wb.sheetnames:
                continue
            else:
                missing_ws_list.append(name)
        if len(missing_ws_list) != 0:
            raise EnvironmentError

        invoice_ws = wb["invoice"]
        customer_ws = wb["customer"]
        invoice_list_ws = wb["invoice_list"]
        product_ws = wb["product"]

        customer_dict = {}
        product_dict = {}
        invoice_dict = {}
        invoice_list_dict = {}

        storeWbIntoDict(customer_ws,customer_dict)
        storeWbIntoDict(product_ws,product_dict)
        storeWbIntoDict(invoice_ws,invoice_dict)
        storeInvoiceList(invoice_list_ws, invoice_list_dict)

    except EnvironmentError:
        print("Data is invalid due to the following reason:")
        print(f'Missing WorkSheet:')
        string = ''
        for ws in missing_ws_list:
            string += f'{ws}'
        print(f"Can not find the following worksheet/s: '{string}'")
    except:
        print("Directory path is invalid")

validateData('./data_tables','shopdata.xlsx')
## insert data into dict
wb = load_workbook('./data_tables/shopdata.xlsx')

invoice_ws = wb["invoice"]
customer_ws = wb["customer"]
invoice_list_ws = wb["invoice_list"]
product_ws = wb["product"]

customer_dict = {}
product_dict = {}
invoice_dict = {}
invoice_list_dict = {}

def storeWbIntoDict(ws, targetDict):
    num_row = len(ws['A'])
    num_col = len(ws[1])
    header_list = ws[1]

    for row in ws.iter_rows(min_row=2,max_col=num_col,max_row=num_row):
        row_obj = {}
        for i in range(1,num_col):
            row_obj[header_list[i].value] = row[i].value

        targetDict[row[0].value] = row_obj

def storeInvoiceList(ws, targetDict):
    num_row = len(ws['A'])
    num_col = len(ws[1])
    header_list = ws[1]

    for row in ws.iter_rows(min_row=2,max_col=num_col,max_row=num_row):
        invoice_key = row[1].value
        if invoice_key in targetDict:
            targetDict[invoice_key].append({header_list[0].value: row[0].value, header_list[2].value: row[2].value})
        else:
            targetDict[invoice_key] = [{header_list[0].value: row[0].value, header_list[2].value: row[2].value}]


storeWbIntoDict(customer_ws,customer_dict)
storeWbIntoDict(product_ws,product_dict)
storeWbIntoDict(invoice_ws,invoice_dict)
storeInvoiceList(invoice_list_ws, invoice_list_dict)

## create invoice from dictionaries

def createInvoice(invoiceID):
    if invoiceID not in invoice_dict:
        return "invoice does not exist"
    
    customerID = invoice_dict[invoiceID]["Customer_ID"]
    date = invoice_dict[invoiceID]['Date_issued']
    firstName = customer_dict[customerID]['FirstName']
    lastName = customer_dict[customerID]['LastName']
    email = customer_dict[customerID]['Email']
    invoice_item = invoice_list_dict[invoiceID]

    invoice_item_chart = []
    total = 0
    for item in invoice_item: 
        itemName = product_dict[item['Item_ID']]['Item_name']
        itemUnitPrice = product_dict[item['Item_ID']]['Item_price']
        quantity = item['Quantity']
        total = total + itemUnitPrice * quantity
        invoice_item_chart.append({"Item":itemName, "Quantity": quantity, "Price": itemUnitPrice, "Amount": quantity * itemUnitPrice})
    
    with open('invoice.txt', mode='w') as invoice:
        invoice.write(f'Invoice For:\n {firstName} {lastName} \n {email} \n \n')
        invoice.write(f'Invoice ID: {invoiceID} \n Sent: {date.date()} \n Due: {(date + datetime.timedelta(days=14)).date()} \n \n' )
        invoice.write(f"ITEM            Quantity    Unit Price      Amount \n \n")
        for item in invoice_item_chart:
            invoice.write(f'{item["Item"]}          {item["Quantity"]}        ${item["Price"]}.00            ${item["Amount"]}.00 \n \n')
        invoice.write(f"SUBTOTAL:${total}.00\n TAX:${round(total * 0.1, 2)}")

# if __name__ == '__main__':
#     print("***creating invoice***")
#     createInvoice(2)
#     print("***invoice successfully created***")


