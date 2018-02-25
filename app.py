from flask import Flask, render_template, g
from data import Articles
import pymysql
import geocoder


app = Flask(__name__)

@app.before_request
def before_request():
    g.conn = pymysql.connect(host='localhost',
                             user='root',
                             passwd='mysql',
                             db='testdata',
                             charset='utf8')

    g.cur = g.conn.cursor(pymysql.cursors.DictCursor)

Articles = Articles()



@app.route('/')
def index():
    geo = geocoder.ip('me')
    print(geo.lat)
    print(geo.lng)
    g.cur.execute("select k1,k2 FROM data")
    data = g.cur.fetchall()
    return render_template('map.html',data=data,geo=geo)
@app.route('/map')
def map():
    return render_template('map.html')
@app.route('/home/')
def home():
    return render_template('home.html')
@app.route('/about/')
def about():
    return render_template('about.html')
@app.route('/articles/')
def articles():
    return render_template('articles.html', articles=Articles)
@app.route('/article/<string:id>/')
def article(id):
    return render_template('article.html', id=id)
if __name__ == '__main__':
    app.run(host = "localhost", debug = True)