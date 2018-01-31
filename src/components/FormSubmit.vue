<template>
  <div id='wrapper'>
    <form action='' class='form' id="form" v-on:submit.prevent="submit">
      <h1>Contact Us</h1>
      <p class='field'>
        <input class='text-input' v-model="formData.name" id='name' name='name' required type='text' placeholder="Name">
      </p>
      <p class='field'>
        <input class='text-input' v-model="formData.email" id='email' name='email' required type='email' placeholder="Email">
      </p>
      <p class='field'>
        <textarea class='textarea' v-model="formData.text" cols='10' id='message' name='message' required rows='1' placeholder="Message"></textarea>
      </p>
      <p class='field'>
        <input class='button' type='submit' value='Submit' >
      </p>
    </form>
  </div>
</template>

<script>

  import {Post} from '../services/postService.js'

  export default {

    data() {
      return {
        formData: {
          email: "",
          name: "",
          text: ""
        }
      }
    },

    methods:{
      async submit () {
        await Post(this.formData)
      }
    }
  }
</script>

<style>
  .form .text-input, .form .textarea, .form .label, .form .button {
    padding: 1em 1.5em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    line-height: normal;
    border: 1px solid transparent;
    border-radius: 0;
  }

  .form .text-input, .form .textarea {
    font: inherit;
    line-height: normal;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    padding-left: 0;
    border-bottom-color: rgba(0, 0, 0, 0.3);
    background: transparent;
    outline: none;
    color: black;
  }
  .form .text-input:placeholder, .form .textarea:placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  .form .text-input:-webkit-autofill, .form .textarea:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    border-top-color: white;
    border-left-color: white;
    border-right-color: white;
  }
  .form .error.text-input, .form .error.textarea, .error .form .text-input, .form .error .text-input, .error .form .textarea, .form .error .textarea {
    border-color: transparent transparent red transparent;
  }
  .form:not(.has-floated-label) .text-input:active, .form:not(.has-floated-label) .textarea:active, .form:not(.has-floated-label) .text-input:focus, .form:not(.has-floated-label) .textarea:focus {
    border-color: transparent transparent black transparent;
  }

  .form .label {
    position: absolute;
    z-index: 10;
    pointer-events: none;
    padding-left: 0;
  }

  .form h1{
      font-size: 1.5em;
      font-weight: 200;
      margin-top: 20px;
  }

  .form .label {
    top: 0;
    left: 0;
    color: rgba(0, 0, 0, 0.7);
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
  .active .form .label, .form .active .label {
    font-size: 0.75em;
    line-height: 1;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0;
    color: rgba(0, 0, 0, 0.7);
    background: white;
  }
  .focus .form .label, .form .focus .label {
    color: black;
  }

  .form.has-floated-label .field:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    border-bottom: 1px solid black;
    -webkit-transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  .form.has-floated-label .field.focus:after {
    width: 100%;
  }

  .form .button {
    background-color: #00963d;
    border: 2px solid white;
    border-radius: 27px;
    color: white;
    cursor: pointer;
    font-size: 20px;
    margin-top: 20px;
    padding: 15px 30px;
    text-transform: none;
    transition: all 200ms;
  }
  .form .button:hover, .form .button:focus, .form .button:active {
    background-color: white;
    color: #333333;
    outline: 0;
  }
  .form .button:active {
    position: relative;
    top: 1px;
    left: 1px;
  }

  .form {
    max-width: 30em;
    margin: 2em auto;
    padding: 1em 2em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid #ccc;
  }
  .form .field {
    position: relative;
    width: 100%;
    margin-bottom: 1.5em;
    float: left;
  }
  @media screen and (min-width: 40em) {
    .form .field.half {
      width: calc(50% - 2em);
      margin-right: 2em;
    }
    .form .field.half + .half {
      margin-left: 2em;
      margin-right: 0;
    }
  }
  .form .field:last-child {
    margin: auto;
  }
  .form .textarea {
    max-width: 100%;
  }

  svg path {
    fill: black;
  }

</style>
