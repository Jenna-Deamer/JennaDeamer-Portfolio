function Contact() {
  return (
    <>
      <h1 className="text-center">Let's Get In Touch!</h1>
      <section className="container pageContainer">
      <form  action="https://formsubmit.co/jennadeamer@gmail.com" method="POST" className="container">
                <fieldset className="row justify-content-center ">
                    <div className="col-md-6">
                        <label htmlFor="name" className="mt-2"><i className="bi bi-person"></i> Name:</label>
                        <input type="text" id="name" name="name" className="form-control" required={true} />

                        <label htmlFor="email" className="mt-2"><i className="bi bi-envelope-at"></i> Email:</label>
                        <input type="email" id="email" name="email" className="form-control" placeholder="somewhere@gmail.com" required={true} />
                    </div>
                </fieldset>

                <fieldset className="row justify-content-center">
                    <div className="col-md-6">
                        <label htmlFor="message" className="mt-2"><i className="bi bi-pencil"></i> Message:</label>
                        <textarea id="message" name="message" className="form-control" required={true}></textarea>
                    </div>
                </fieldset>

                <div className="row align-items-center align-items-center  justify-content-center">
                    <div className="col-md-6 ">
                        <button className="btnPrimary mt-4" type="submit">Submit</button>
                    </div>
                </div>
            </form>
      </section>
    </>
  );
}

export default Contact;
