

# Live Link : https://phcourse.netlify.app/

# Three Feature of the project
==> The first feature is that we are able to select our course according to our choice

==> The second feature is that there are some limitations regarding our credit hours and total amount of money

==> Thirdly we can see our selected course and there is no chance to choose the same course for double time because there will be a notifier that will not allow me to select the same thing twice.

# Discuss How You Managed the state in your assignment project
==> I have managed the state regarding my required functionality. First, I fetched the data from a public folder and then stored them in a state named "course" Then I sent them to the next child component Course.jsx and finally it sent it to the Course.JSX whose task is to display the data as a template.

==> Another State was for the lifting up of the function from child components to parent components to use some condition there and to display our selected course in to Bookmark portion. The condition was that the user couldn't selects the same course twice then we had some limitation on price and credit hour which could not be exited and also added some toast notifier to inform the user about their time and condition to make the right choice to select the course. where I used the state named "selected course" which is also a useState. In short, I have used only one state which is useState.
