import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>MeetUp.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro aliquid aspernatur ratione sequi maiores repellat iste. Numquam.</p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='Username'></input>
            <input type='mail' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <input type='text' placeholder='Name'></input>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register