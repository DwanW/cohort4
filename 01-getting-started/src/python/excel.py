from openpyxl import load_workbook

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


# storeWbIntoDict(customer_ws,customer_dict)
# storeWbIntoDict(product_ws,product_dict)
# storeWbIntoDict(invoice_ws,invoice_dict)
# storeInvoiceList(invoice_list_ws, invoice_list_dict)