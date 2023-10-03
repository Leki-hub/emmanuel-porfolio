import React from 'react'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <>
    <section id="contact" className="contact">
			<div className="section-heading text-center">
				<h2>contact me</h2>
			</div>
			<div className="container">
				<div className="contact-content">
					<div className="row">
						<div className="col-md-offset-1 col-md-5 col-sm-6">
							<div className="single-contact-box">
								<div className="contact-form">
									<form>
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
												  <input type="text" className="form-control" id="name" placeholder="Name*" name="name" />
												</div>
											</div>
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input type="email" className="form-control" id="email" placeholder="Email*" name="email" />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<input type="text" className="form-control" id="subject" placeholder="Subject" name="subject" />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<textarea className="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="single-contact-btn">
													<a className="contact-btn" href="#" role="button">submit</a>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-5 col-sm-6">
							<div className="single-contact-box">
								<div className="contact-adress">
									<div className="contact-add-head">
										<h3>Leki Emmanuel</h3>
										<p>Web developer</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>phone</h3>
											<p><a href="tel:+254784810509">Call Us</a></p>

										</div>
										<div className="single-contact-add-info">
										    <p>Email</p>
											<a href="mailto:lekisintole82@gmail.com"><i>Send Email</i></a>

										</div>
										<div className="single-contact-add-info">
											<h3>website</h3>
											<p><a href=''>www.leki.com</a></p>
										</div>
									</div>
								</div>
								<div className="hm-foot-icon">
									<ul>
									    <li><a href="https://www.linkedin.com/in/leki-emmanuel-8b7540157/" target='_blank'><i className="fa fa-linkedin"></i></a></li>
										<li><a href="https://twitter.com/Ole_Leki_E" target='_blank'><i className="fa fa-twitter"></i></a></li>
										<li><a href="https://www.facebook.com/leki.lemmanuel" target='_blank'><i className="fa fa-facebook"></i></a></li>
										
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		<Outlet/>
    </>
  )
}
