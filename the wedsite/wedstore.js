<!DOCTYPE html>

<html lang="en" dir="ltr">

  <head>

    <meta charset="utf-8">

    <title>FORM Beginnings</title>

    <meta name="author" content="Mark Mercer">
    <meta name="description" content="Basic HTML Form Collection"> <!-- Webpage Description to poplulate search engines like Google-->
    <meta name="keywords" content="Collecting User Data"> <!-- Key words for searching -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  </head>

  <body>

    <header><h1>Webstore</h1></header>
    <!-- See: https://www.youtube.com/watch?v=OGwKOxh5hqQ&feature=youtu.be-->
    <p>Note: a comment inside this code directs you to the origonal video by a friend of mine who uses this form. It doesnt show you how to type the form.</p>
    <nav><h2></h2></nav>
    <aside><p></p></aside>
    <section>
      <h3></a></h3>
      <p>What you are looking at ... also written into the code
        <ul>
          <li> 2 Text Fields, default size, within paragraph tags so line breaks are added, <a href="https://www.w3schools.com/tags/tag_input.asp" target="_blank">Click Here for more information</a>
          <li> Textfields are known by: varaible name and type, the ID is for CSS Styling, <a href="https://www.w3schools.com/tags/att_input_type.asp" target="_blank">Click Here for various types</a>
          <li> Another textfield is email, it automatically validates if what is typed is actually an email, <a href="https://www.w3schools.com/tags/att_input_type_email.asp" target="_blank">For more information about email-type, click here</a>
          <li> Another textfield is password, notice that this type will mask the characters keeping the password "eyes only"<a href="https://www.w3schools.com/tags/att_input_type_password.asp" target="_blank">For more information about password-type, click here</a>
          <li> Another textfield is textArea, <a href="https://www.w3schools.com/tags/tag_textarea.asp" target="_blank">Click Here for more information</a>
          <br>
          <li> Two types of Buttons, Radio and Checkbox, can be grouped within a fieldset and legend, show below
          <li> Using the mouse, Radio Buttons are elements to click, but only one records your answer, <a href="https://www.w3schools.com/tags/att_input_type_radio.asp" target="_blank">Click Here for more information</a>
          <li> There is some useful coding that can happen with radio buttons, try this <a href ="https://www.html5-tutorial.net/forms/radiobuttons/">tutorial</a>, and this <a href="https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_radio_value2">tutorial</a>
          <li> Using the mouse, Checkboxes are also elements to click, and all can engage your click, <a href="https://www.w3schools.com/tags/att_input_checked.asp" target="_blank">Click Here for more information</a>
          <li> Here are some additional tutorials to help understand checkboxes and how to get answers from them, <a href="">Empty Hyperlink, for now</a>
          <li> Finally, a submit button will activate the JavaScript Code <a href="" target="_blank">Click Here for more information</a>
        </ul>
      </p>

      <form action="x.html" method="post" onsubmit="event.preventDefault();">
        <!-- Ensures this FORM doesnt work with PHP or other server side scripting languages-->

      <p>&nbsp;</p>
      <!-- See: https://www.w3schools.com/html/html_entities.asp-->
      <!-- Non-breaking real space, adds real space to webpage that is not eliminated by browser (hard coded space)-->
      <p>
        <label for="textfield">TextField 1:</label>
        <input name="textfield1" type="text" id="textfield1">
      </p>
      <p>
        <label for="textfield2">TextField 2:</label>
        <input name="textfield2" type="text" id="textfield2">
      </p>
      <p>
        <label for="email">Email:</label>
        <input name="email" type="email" id="email">
      </p>
      <p>
        <label for="password">Password:</label>
        <input name="password" type="password" id="password">
      </p>
      <!-- Textarea is mutliline plain text editing control-->
      <p>
        <label for="tArea">Text Area:</label>
        <textarea type="tArea" cols="20" rows="4" id="password"></textarea>
      </p>
      <p>&nbsp;</p>


      <p>&nbsp;</p>
        <fieldset>
          <legend>Some Checkbox Buttons</legend>
            <label>
              <input type="checkbox" name="CheckboxGroup1" nalue="checkbox1" id="CheckboxGroup1_0">
              Checkbox 1
            </label>
            <br>
            <label>
              <input type="checkbox" name="CheckboxGroup1" nalue="checkbox2" id="CheckboxGroup1_1">
              Checkbox 2
            </label>
            <br>
            <label>
              <input type="checkbox" name="CheckboxGroup1" nalue="checkbox3" id="CheckboxGroup1_2">
              Checkbox 3
            </label>
            <br>
        </fieldset>

        <p>&nbsp;</p>
        <!-- Submit Button-->
        <input type="submit" id="subBtn" value="Submit information" />


<!-- The rest of the HTML Layout is below simply to maintain the idea of starting wtih a boilerplate -->
      <article><p></p></article>
    </section>
    <section><h3></h3>
      <article><p></p></article>
      <article><p></p></article>
    </section>
    <br><br><br>

    <script src="index.js"></script>

  </body>


</html>
