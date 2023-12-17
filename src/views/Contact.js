function Contact() {
  return (
    <>
      {/* <h1 className="text-center">Contact Me</h1> */}
      <section className="contactContainer">
        <form>
          <div className="form-group row">
            <div className="col-md-6">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                id="nameInput"
                placeholder="John Doe"
              ></input>
            </div>

            <div className="col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="somewhere@gmail.com"
              ></input>
            </div>
          </div>

          <label>Message</label>
          <input
            className="form-control"
            id="messageInput"
            placeholder="enter your message..."
          ></input>
        </form>
      </section>
    </>
  );
}

export default Contact;
