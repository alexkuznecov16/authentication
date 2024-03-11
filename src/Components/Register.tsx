import { FC, useState } from 'react'
import axios from 'axios';

const Register: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/register', {email, password})
    .then(res => {
      console.log(res.data);
      setResult('Register successfully!');
    })
    .catch(err => {
      console.log(err);
      setResult('Register failed, this email is already exist!');
    });
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <div style={{padding: '12px', backgroundColor: 'blue', width: '200px'}}>
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom: '6px'}}>
            <label htmlFor="email">Email</label>
            <input required type="email" placeholder='Enter Email' style={{padding: '4px', borderRadius: '5px'}} onChange={e => setEmail(e.target.value)} />
          </div>
          <div style={{marginBottom: '6px'}}>
            <label htmlFor="password">Password</label>
            <input required type="password" placeholder='Enter Password' style={{padding: '4px', borderRadius: '5px'}} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type='submit'>Register</button>
        </form>
      </div>
      {result === 'Register successfully!' ? (
  <p style={{ color: 'green' }}>{result}</p>
) : (
  <p style={{ color: 'red' }}>{result}</p>
)}
    </div>
  )
}

export default Register
