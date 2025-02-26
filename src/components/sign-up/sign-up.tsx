import "./sign-up.scss";

function SignUp() {
  return (
    <div className="signUp_container">
      <h2>Sign up to get brief updates - new colors, sizes, and styles straight to your inbox.</h2>
      <form action="submit" className="signUp_form">
        <input type="email" name="email" id="email" placeholder="Enter your email" />
        <button type="submit">Send</button>
      </form>
      <p>Send email now</p>
    </div>
  );
}

export default SignUp
