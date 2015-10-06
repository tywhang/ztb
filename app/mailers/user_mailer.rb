class UserMailer < ApplicationMailer
  def welcome_email user
    @user = user

    mail(
      from: "zerotobootcamp@gmail.com",
      to: @user.email,
      subject: "Welcome to Zero To Bootcamp!"
    )
  end
end
