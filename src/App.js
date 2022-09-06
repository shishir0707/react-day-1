
import './App.css';
import './header/Main-header';

import MainNav from './header/Main-header';
import Slide from './carosel/Slider';





function App() {
  return (
    <div>
      <MainNav />
      <Slide />
      <div className='container p-4'>
        <form name="sentMessage text-light" id="contactForm" novalidate="novalidate">
          <div class="form-row d-flex">
            <div class="control-group col-sm-6 p-2">
              <input type="text" class="form-control p-4" id="name" placeholder="Your Name"
                required="required" data-validation-required-message="Please enter your name" />
              <p class="help-block text-danger"></p>
            </div>
            <div class="control-group col-sm-6 p-2">
              <input type="email" class="form-control p-4" id="email" placeholder="Your Email"
                required="required" data-validation-required-message="Please enter your email" />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group p-2">
            <input type="text" class="form-control p-4" id="subject" placeholder="Subject"
              required="required" data-validation-required-message="Please enter a subject" />
            <p class="help-block text-danger"></p>
          </div>
          <div class="control-group p-2">
            <textarea class="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
              required="required"
              data-validation-required-message="Please enter your message"></textarea>
            <p class="help-block text-danger"></p>
          </div>
          <div>
            <button class="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
              Message</button>
          </div>
        </form>
      </div>
      <div className='footer'>
        <p>@Copyright 2028</p>
      </div>
    </div>
  );
}

export default App;
