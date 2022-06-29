// Dummy component, to be used as a placeholder for now.

function Login(props) {
  let userLoginInfo = props.setUserLoginInfo;
  return (
    <>
      <div>{userLoginInfo}</div>
    </>
  );
}

export default Login;
