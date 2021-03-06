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
        StringBuilder sb = new StringBuilder();
        sb.append("--- New form ---");
        sb.append("Type: " + formType + "\n");
        sb.append("Name: " + firstName + " " + lastName + "\n");
        sb.append("Email: " + email + "\n");
        sb.append("Message: " + message);

        // Store in log
        System.out.println(sb.toString());

        // Write the value to the response so the user can see it.
        response.getWriter().println("Nice to hear from you, " + firstName + "! Your contact form has been sent! I will get back to your account at " + email + " within one week. Thank you!");
    }
}