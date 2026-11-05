# S2F-1 Semester 2 Final review: Web Scraping (Static + Dynamic), AI

> From the Grade 9 Resource Department's Semester 2 Final Computer Science H review guide (PA). Writers: Kenny 9-6, Atticus 9-6. Editor: Caitlin 9-2. Range: Web Scraping (Static + Dynamic), AI. Student-made reference material: where it differs from class, follow class.

**Static Web Scraping**

**Concept**

**Web scraping**: extracting data from websites in an automated manner.

-collects unsstructured data from websites and stores it in a structured form

-implicit **politeness**: crawlers should be polite such that they avoid hitting any site too often, avoiding denial of service.

-explicit politeness: Site administrators use a robots.txt file to tell well-behaved web crawlers which parts of a site to avoid, and crawlers that ignore these rules may be banned.

-robustness: web crawler must be designed to handle both malicious traps (spider traps and spam pages) and non-malicious traps caused by faulty website development

**Robots Exclusion Protocol (REP)** : a standard that regulatesweb robot behavior and tells whether a website allows web scraping or not.

-e.g. find the website’s REF by appening “/robots.txt” to the url, displaying:

- User-agent: Baiduspider
- Disallow: /baidu

**Working Process** of Web Scraper:

1. Send HTTP request to get response

2. Parse the web data

3. Extract the data

4. Store the data

5. Visualization

**Domain Name**: identifies a particular computer on the internet

**Internet Protocol (IP) Address**: a number that indicates the location of a computer on a network.

-IPv4: 32 bit address

-IPv6: 128 bit address

**Domain Name System (DNS)**: a mechanism that assign easy-to-remember names to IP address.

**Transmission Control Protocol (TCP)**: packing and reassembling data

**Internet Protocol (IP)**: addressing data

**Coding**

**Requests**: can be used to make a HTTP request to a web server

-to import it from python library: “import requests”

| Code | Explanation |
|---|---|
| res=requests.get(url) | retrieve information from the given server using a given URL |
| res.status_code | returns an integer; 200: request succeeded;; 403: no access rights to the content;; 404: the server cannot find the requested resource |
| res.text | returns string data of a URL |
| res.content | returns binary data of a URL |
| res.encoding | returns webpage encoding |

**Request Headers**: provides the data about the request, the client.

-A request header could be found through:

Here, the headers should be manually inserted in a dictionary for future usage:

headers = {"Referer": url "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36" }

Headers could be in the output after:

res=requests.get(url,headers=headers) #this will retrieve information from the URL through the headers of the client

print(res.request.headers) #this will output the headers dictionary

Saving video/images into local directory/file:

**Selecting Information from DOM Using CSS Selectors**

**Beautiful Soup**: a third-party module working with the HTML or XML parsers to extract data from the web pages, through searching and modifying the parse tree

-to import it from python library: “import bs4”

**Document Object Model (DOM)**: defines the logical tree structure of the website.

e.g.

**CSS selectors**: utilizes the **select()** method to retrieve web element from web page

| Parser Library |  |
|---|---|
| soup = bs4.BeautifulSoup(html, 'html.parser') | parses an HTML string into a BeautifulSoup object for web scraping through html.parser |
| soup = bs4.BeautifulSoup(html, ‘lxml') | parses an HTML string into a BeautifulSoup object for web scraping through lxml parser |
| CSS Selectors |  |
| soup.select(‘div’) | all elements named <div> |
| soup.select(‘div#author’) | all elements named <div> that uses an id attribute named author |
| soup.select(‘div.notice’) | all elements named <div> that uses a class attribute named notice |
| soup.select('div span') | all elements named <span> that are within an element named <div> |
| soup.select('div>span') | all elements named <span> that are directly within an element named <div> |
| soup.select('input[name]') | all elements named <input> that have a name attribute with any value |
| soup.select('input[type="button"]') | all elements named <input> that have an attribute named type with value button |
| Find Attribute Value of an Element |  |
| soup.select('a')[0]['href'] | get the attribute 'href' value of the first element named <a> |
| soup.select('a')[0].get('href') |  |
| soup.select('a')[0].attrs['href'] |  |
| Find Text Value of an Element |  |
| soup.select('a')[0].getText() | get the text of the first element named <a>; eg. <a> text</a> : here, the highlighted part is the text of the first element named <a> |
| soup.select('a')[0].text |  |
| General Application |  |
| soup.select('tag[attr="val"]') | select all the elements tag with attribute attr and value val |
| soup.select('tag[attr="val"]')[0].getText | get the inner text of the first element named tag with attribute attr and value val |
| soup.select('tag[attr="val"]')[0].get('href') | get the attribute value of 'href' from the first element named tag with attribute attr and value val |

**Inspect** an Element: right-click an element on the page or in a blank area, then select Inspect option.

The HTML on the right represents the structure of the page on the left.

**Dynamic Web** **Scraping**

**Dynamic web pages**：web pages that refresh new content as we scroll down
-new content is refreshed, but the url does not change

-generated with JavaScript
-websites use JavaScript APIs to request data from the server and update the page content without a page load

**JavaScript**: interacts with HTML elements or nodes, manipulating them in response to user inputs, triggering visual feedback, or dynamically updating content

**Application Programming Interfaces (APIs)**:available in programming languages to allow developers to create complex functionality more easily, simplify code into understandable syntax
-real world example: use plug to get electricity instead of wiring directly

-Benefits:

-updates are quicker

-more responsive

-less data on each update

-less wasted bandwidth

**JSON**: **J**ava **S**cript **O**bject **N**otation
-JavaScript API can make http request to server, data returned often in JSON format
-good format for structured data
- **json.loads()** converts a dict-like string to a dict

-AJAX: before, this method was called Asynchronous JavaScript and XML (AJAX) because it requests XML, today json is more likely, but "Ajax" still used to describe this

-ex.

employee ='{"name": "Nitin", “department":"Finance",\“company”:“GFG”}' #this is a json string, looks like dict but it is string because of additional set of quotes
json.loads(employee) output: {'name': 'Nitin', 'department': 'Finance', 'company': 'GFG’}

**Comparision of Dynamic vs Static:**

**XHR**: stands for XMLHttpRequest, dynamic page loading way built inside browser, recieves data after page loaded, no need for reload to get more data
In order to find this, we open the developer tools, find network button and fillter for XHR/Fetch or JSON, enter preview and headers to get the information we need

**Parse JSON using Get:**

res = requests.get(API_URL) # parse the json resp

# parse response object to json data of dict type

json_data = res.json()

# parse text form of response object to json data of dict type

json_data = json.loads(res.text) # json_data = json.loads(str)

-when using post, it is the same, replace get with post, add parameter json=data
-the output will be a dictionary, use the methods for dictionary to make modifications

**Methods for Dictionary:**

| **Method** | **What it does** |
|---|---|
| d.keys() | return view of keys |
| d.values() | return view of values |
| d.items() | return view of key-value pairs |
| d[key] | retrieve value of the key |
| for i in d.items() | loop over key-value pairs, very effective |

**Practice question:**
**-**crawl 澎湃新闻 https://www.thepaper.cn list page using dynamic web crawling ways to get the title, picture, tags of each article
-hint: the json file is inside network, Fetch/XHR

**AI**

**Definition**: the technology that enables computers and machines to simulate human intelligence and problem-solving capabilities.

-can be modeled after the decision-making process of human

Machine Learning: branch of AI that uses data and algorithms to learn about a situation, in order to make future predictions or decisions.

-uses inputs and outputs to create computer models to learn from data and achieve AI.

3 Types of Machine Learning:

**1.Supervised Learning**: labels datasets to train models to classify data or predict outcomes as intended.

-Given a data set of input-output pairs, a function learns to map inputs to outputs. As input data is fed into the model, the model adjusts its weights until it has been fitted appropriately. -The data needs to be structured or labeled by humans.

Example 1:

Example 2:

**Classification**: a task of teaching a function to map an input point to a discrete category.

Example 3:

Regression: a task of teaching a function to map an input point to a continuous value.

**2.Unsupervised Learning**: learns from the input data itself, identifying patterns and structures in the data without the explicit labels or outcomes.

**3.Reinforcement Learning**: learns to perform a task by trial and error.

-Over-fitting vs. Under-fitting: when AI tries to identify trends, sometimes it can use too simple or too complex functions to represent the data

-this can lead to inaccurate predictions
