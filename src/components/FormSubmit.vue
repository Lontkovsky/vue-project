<template>
  <div id='wrapper'>
    <form class='form' v-on:submit.prevent="onSubmit">
      <h1>Contact Us</h1>
      <div class='field'>
        <input class='text-input' v-model="formData.name" id='name' name='name' type='text' placeholder="Name">
        <span v-if="showNameMsg" class="danger">{{nameErrorMsg}}</span>
      </div>
      <div class="field">
        <input class="text-input" v-model="formData.email" id='email' name='email' type='text' placeholder="Email">
        <span v-if="showEmailMsg" class="danger">{{emailErrorMsg}}</span>
      </div>
      <div class='field'>
        <textarea class='textarea' v-model="formData.text" cols='10' id='message' name='message' rows='1' placeholder="Message"></textarea>
        <span v-if="showTextMsg" class="danger">{{textErrorMsg}}</span>
      </div>
      <div class='field'>
        <input class='button' type='submit' value='Submit' >
      </div>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate';
  import {Post} from '../services/postService.js'

  Vue.use(VeeValidate);

  export default {

    data() {
      return {
        formData: {
          email: "",
          name: "",
          text: "",
        },

        showEmailMsg: false,
        showNameMsg: false,
        showTextMsg: false,

        emailErrorMsg: '',
        nameErrorMsg: '',
        textErrorMsg: ''
      }


    },

    methods: {
      async onSubmit() {
        if (this.formData.email.indexOf("@.") === -1) {
          this.showEmailMsg = true;
        }
        else this.showEmailMsg = false;

        if (this.formData.name === "") {
          this.showNameMsg = true;
        }
        else this.showNameMsg = false;

        if (this.formData.text === "") {
          this.showTextMsg = true;
        }
        else this.showTextMsg = false;

          try {
            await Post(this.formData)
          } catch (e) {
            this.emailErrorMsg = e.response.data.email[0];
            this.textErrorMsg = e.response.data.text[0];
            this.nameErrorMsg = e.response.data.name[0];
          }
        }
      }
  }
</script>




<style>

  .danger{
    color:red;
  }
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


  .form h1{
      font-size: 1.5em;
      font-weight: 200;
      margin-top: 20px;
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
    background-color: #00963d;
    color: #fff;
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
