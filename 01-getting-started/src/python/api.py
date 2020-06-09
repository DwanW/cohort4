from flask import Flask, jsonify, render_template
from excel import storeWBIntoObject

data = storeWBIntoObject('./data_tables/shopdata.xlsx')

app = Flask(__name__)

@app.route("/")
def get_template():
    return render_template("main.html", data=data)

@app.route('/all')
def showData():
    return jsonify(data), 200

@app.route('/customer/<int:customer_id>')
def getCustomerInfo(customer_id):
    try:
        return jsonify(data["customer"][customer_id]), 200
    except:
        return jsonify("data not found"), 404

@app.route('/product/<int:product_id>')
def getProductInfo(product_id):
    try:
        return jsonify(data["product"][product_id]), 200
    except:
        return jsonify("data not found"), 404

@app.route('/invoice/<int:invoice_id>')
def getInvoiceInfo(invoice_id):
    try:
        customerID = data["invoice"][invoice_id]["Customer_ID"]
        issueDate = data["invoice"][invoice_id]["Date_issued"]
        customerObj = data["customer"][customerID]
        invoice_list = data["invoice_list"][invoice_id]

        invoice_item_chart = []
        for item in invoice_list: 
            itemName = data["product"][item['Item_ID']]['Item_name']
            itemUnitPrice = data["product"][item['Item_ID']]['Item_price']
            quantity = item['Quantity']
            invoice_item_chart.append({"Item":itemName, "Quantity": quantity, "Price": itemUnitPrice, "Amount": quantity * itemUnitPrice})

        return jsonify({"invoiceID": invoice_id, "dateIssued": issueDate,"customerID": customerID, "customerInfo": customerObj,"invoiceInfo":invoice_item_chart}), 200
    except:
        return jsonify("invoice not found"), 404
        
        

    return jsonify(data["invoice"]), 200

if __name__ == '__main__':
	print("--- Starting", __file__)
	app.run(debug=True, use_reloader=True)
