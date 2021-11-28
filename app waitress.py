import os
from flask import Flask

app = Flask(__name__)

# configure app code...

from waitress import serve

if __name__ == '__main__':
   # print("-- DEBUG MODE ----")
   # app.run(debug=True, port='5091')

   print("--PRODUCTION MODE ---")
   p = os.environ.get('PORT')
   p = '5099' if p == None else p
   serve(app, host='0.0.0.0', port=p)
