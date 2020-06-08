from flask import Flask, jsonify, render_template
from excel import storeWBIntoObject

data = storeWBIntoObject('./data_tables/shopdata.xlsx')

app = Flask(__name__)

@app.route("/")
def get_template():
    return render_template("main.html", data=data)

@app.route('/all')
def showData():
    return jsonify(data)

if __name__ == '__main__':
	print("--- Starting", __file__)
	app.run(debug=True, use_reloader=True)
