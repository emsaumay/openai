Shared dependencies between the generated files:

1. app.py:
   - Flask
   - render_template
   - request
   - redirect
   - url_for
   - session
   - flash
   - jsonify
   - bcrypt
   - db (from database.py)

2. index.html:
   - style.css
   - script.js

3. style.css: (No shared dependencies)

4. script.js:
   - jQuery
   - AJAX
   - DOM elements: questionText, option1, option2, option3, option4, submitButton, messageBox

5. database.py:
   - psycopg2
   - db (exported variable)