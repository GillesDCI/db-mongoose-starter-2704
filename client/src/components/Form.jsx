import React from 'react'
import axios from 'axios'

const baseURL = "http://localhost:3001/user/register"

const Form = () => {

    const registerUser = async () => {
        const res = await axios.post(baseURL, {})

    }

    

  return (
    <form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"/>

  <label for="password">Password:</label>
  <input type="text" id="password" name="password" />

  <label for="firstName">First Name:</label>
  <input type="text" id="firstName" name="firstName"/>

  <label for="lastName">Last Name:</label>
  <input type="text" id="lastName" name="lastName" />

  <label for="dateOfBirth">Date of Birth (Format: YYYY-MM-DD)</label>
  <input type="date" id="dateOfBirth" name="dateOfBirth"/>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <label for="telephone">Telephone:</label>
  <input type="text" id="telephone" name="telephone"/>

  <label for="gender">Gender:</label>
  <input type="text" id="gender" name="gender" />

  <input type="submit" value="Submit"/>
</form> 
  )
}

export default Form