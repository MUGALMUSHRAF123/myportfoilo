package LoginServices;

public class LoginService {
    private String username;
    private String password;

    // Constructor
    public LoginService(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Public method to authenticate user
    public boolean authenticate(String enteredUsername, String enteredPassword) {
        return username.equals(enteredUsername) && password.equals(enteredPassword);
    }

    // Private method to validate username and password
    private boolean validate(String username, String password) {
        // Logic to validate username and password
        return true;
    }

    public static void main(String[] args) {
        // Example usage
        LoginService loginService = new LoginService("admin", "password");

        // Try to authenticate
        boolean isAuthenticated = loginService.authenticate("admin", "password");

        // Print result
        if (isAuthenticated) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Invalid username or password!");
        }
    }
}
