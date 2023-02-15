<template>
    <body class="bg-light" data-new-gr-c-s-check-loaded="8.904.0" data-gr-ext-installed="">
    
    <div class="container">
    <main>
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
      <h2>Contact us form</h2>
      <p class="lead">You can contact us by sending an email or by filling out the form below.</p>
    </div>

    <div class="row g-5">

      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-warning">Our emails</span>
          <!--<span class="badge bg-primary rounded-pill"></span>-->
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <a href="mailto:dario@mail.polimi.it"><h6 class="my-0">dario@mail.polimi.it</h6></a>
              <!-- <h6 class="my-0">dario@mail.polimi.it</h6> -->
              <!--<small class="text-muted">Brief description</small>-->
            </div>
            <!--<span class="text-muted">$12</span>-->
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <a href="mailto:ahmedabdalgader@mail.polimi.it"><h6 class="my-0">ahmedabdalgader@mail.polimi.it</h6></a>
              <!--<small class="text-muted">Brief description</small>-->
            </div>
            <!--<span class="text-muted">$8</span>-->
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <a href="mailto:hussamalden@mail.polimi.it"><h6 class="my-0">hussamalden@mail.polimi.it</h6></a>
              <!-- <h6 class="my-0">hussamalden@mail.polimi.it</h6> -->
              <!--<small class="text-muted">Brief description</small>-->
            </div>
            <!--<span class="text-muted">$5</span>-->
          </li>
          <!--<li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-success">
              <h6 class="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span class="text-success">−$5</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>-->
        </ul>

        <!--<form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </form>-->
      </div> 

      <div class="col-md-7 col-lg-8">
        <!--<h4 class="mb-3">Billing address</h4>-->
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-8">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-4">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

           

            <div class="col-12">
              <label for="email" class="form-label">Email </label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            
            <!--<div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="Via Andrea Maria Ampère, 2" required="">
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>-->

           

            <!--<div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required="">
                <option value="">Choose...</option>
                <option>Italy</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>-->

            <!--<div class="col-md-4">
              <label for="state" class="form-label">City</label>
              <select class="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option>Milano</option>
                <option>Rome</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>-->

            <!--<div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>-->
          </div>



          <div class="col-12 pt-3">
              <label for="Phone Number" class="form-label">Comments </label>
              <textarea data-v-333a2b24="" placeholder="you can describe your target audience number, and the singers you would like to have " class="mb-3" style="display: inline; width: 100%; height: 40%;"></textarea>
            </div>

          <!--<hr class="my-4">-->
          

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address">
            <label class="form-check-label" for="same-address">I want to be up-to-date with the related activities  </label>
          </div>

          <!--<div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info">
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">Payment</h4>-->
          
            

          <!--<div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="">
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="">
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>-->

          <!--<div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required="">
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required="">
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4">-->

          <button class="w-100 btn btn-custom card-button btn-lg" type="submit">Send</button>
        </form>
      </div>
    </div>
  </main>
  </div>
  </body>
</template>

<style scoped>
a{
color: #636959;
}
a :hover{
color: #b48f17;
}
.center {
  margin: auto;
  width: 60%;
  border: 3px solid #c7a022;
  padding: 10px;
}.btn-custom {
  color: white;
  background-color: #636959;
  border-color: white;
  font-size: larger;
  border-width: 2px;
  font-weight: 600;
}
.btn-custom:hover {
  background-color: #b48f17;
}
</style>

<script>


export default {
  name: 'ContactUsPage',
  components: {
  // eslint-disable-next-line vue/no-unused-components
 
  },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    return {
      data,
    }
  },
}
</script>