class UserMailer < ApplicationMailer
  def welcome_email user
    @user = user

    mail(
      from: "zerotobootcamp@gmail.com",
      to: "taeywhang@gmail.com",
      subject: "Welcome to Zero To Bootcamp!"
    )
  end
end
