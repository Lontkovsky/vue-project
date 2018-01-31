import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://develop.growthchannel.io/api`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})

export const Post = (formData) => {
  return HTTP.post('/customer_contact', {
      email: formData.email,
      name: formData.name,
      text: formData.text
  })
}
