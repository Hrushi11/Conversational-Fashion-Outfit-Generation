from flask import Flask, render_template, request
import webbrowser

app = Flask(__name__)

link = "https://b046542f19fac41735.gradio.live"

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('index.html')

@app.route('/flipkart_home', methods=['GET', 'POST'])
def flipkart_home():
    return render_template('flipkart_home.html')

@app.route('/flipkart_product', methods=['GET', 'POST'])
def flipkart_product():
    return render_template('flipkart_product.html', link=link)


if __name__ == "__main__":
    webbrowser.open_new('http://127.0.0.1:2000/')
    app.run(debug=True, port=2000)
