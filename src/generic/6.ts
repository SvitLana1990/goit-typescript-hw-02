/*
  Ви маєте форму реєстрації користувачів.
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю.
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль,
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
function createOrUpdateUser(initialValues: Partial<User>): User {
  const updatedUser: User = {
    name: "Lana",
    surname: "Bardashova",
    email: "svitlana@outlook.es",
    password: "1234",
  };

  return { ...updatedUser, ...initialValues };
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

export {};

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(user: User, fieldsToUodate: Partial<User>): User {
//   return { ...user, ...fieldsToUodate };
// }

// const user1: User = {
//   name: "Svitlana",
//   surname: "Bardashova",
//   email: "svitlana@outlook.es",
//   password: "1234",
// };

// const user2 = {
//   email: "user@mail.com",
//   password: "password123",
// };
