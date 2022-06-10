package com.google.sps;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String firstName = request.getParameter("first-name");
    String lastName = request.getParameter("last-name");
    String email = request.getParameter("email");

    String formType = request.getParameter("form-type");

    String message = request.getParameter("message");

    // Print the value so you can see it in the server logs.
    System.out.println("You submitted: ");

    response.getWriter().println(firstName + lastName + email + formType + message);

    // Write the value to the response so the user can see it.
    response.getWriter().println("Contact form sent! Expect to hear back within one week :)");
  }
}