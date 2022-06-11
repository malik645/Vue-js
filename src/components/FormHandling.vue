<script>
export default {
  name: "FormHandling",
  data() {
    return {
      form: {
          fName: "",
          lName: "",
          email: "",
          city: "",
          state: "",
      }
    };
  },
  methods: {
      submitForm(e){
          e.preventDefault();
         let string = JSON.stringify(this.form);
         let formData = JSON.parse(string);
        console.log(formData)
      }
  }
};
</script>

<template>
  <div class="container">
    <form class="row g-3 needs-validation" @submit= "submitForm" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">First name</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          placeholder="Your Name"
          v-model= "form.fname"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Last name</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          placeholder="Your Last Name"
          v-model= "form.lName"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label"
          >Username</label
        >
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input
            type="text"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            placeholder="Your Email"
            v-model= "form.email"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustom03" class="form-label">City</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom03"
          placeholder="Your City"
          v-model= "form.city"
          required
        />
        <div class="invalid-feedback">Please provide a valid city.</div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">State</label>
        <select class="form-select" id="validationCustom04"  v-model= "form.state" required>
          <option selected disabled value="">Pakistan</option>
          <option>UAE</option>
          <option>USA</option>
        </select>
        <div class="invalid-feedback">Please select a valid state.</div>
      </div>

      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" >Submit form</button>
      </div>
      <span>First Name is: {{ form.fname }}</span>
      <span>Last Name is: {{ form.lName }}</span>
      <span>Email is: {{ form.email }}</span>
      <span>City is: {{ form.city }}</span>
      <span>State is: {{ form.state }}</span>
    </form>
  </div>
</template>
