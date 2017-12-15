from flask import Flask, render_template

app = Flask(__name__, static_folder="./dist/assets", template_folder="./dist")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  return render_template('index.html')


@app.route("/hello")
def hello():
  return "Hello World!"


if __name__ == "__main__":
    app.run(host= '0.0.0.0')
