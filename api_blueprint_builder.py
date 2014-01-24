#/usr/bin/python
from flask import Flask, render_template, request, url_for
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	url_for('static', filename='main.js')
	url_for('static', filename='style.css')
	if request.method == 'POST':
		print request.form
	return render_template('index.html')

class apiBlueprint:

	def __init__(self):
		self.host_name = ""
		self.title = ""
		self.desc = ""
		self.sections = []

	def set_host_name(self, name):
		self.host_name = name

	def set_api_title(self, title):
		self.title = title

	def set_api_description(self, description):
		self.desc = description

	def add_section(self, section):
		self.sections.append(section)

class apiSection:

	def __init__(self):
		self.title = ""
		self.desc = ""
		self.resources = []

	def set_section_title(self, title):
		self.title = title

	def set_section_desc(self, desc):
		self.desc = desc

	def add_resource(self, resource):
		self.resources.append(resource)

class apiResource:

	def __init__(self):
		self.method = ""
		self.url = ""
		self.headers = {}
		self.status_code = ""
		self.responses = []

	def set_resource_method_url(self, method, url):
		self.method = method
		self.url = url

	def add_header(self, header, value):
		self.headers[header] = value

	def add_status_code(self, code):
		self.status_code = code

	def add_response(self, response):
		self.responses.append(response)

class apiResponse:

	def __init__(self):
		self.response_type = ""
		self.fields = {}
	
	def set_response_type(self, type):
		self.response_type = type

	def add_field(self, field, value):
		self.fields[field] = value

if __name__ == "__main__":
    app.run(debug=True)
