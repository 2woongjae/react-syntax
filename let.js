// 1.
{
  let variable = 'block scope';

  console.log(variable);
}

// 2.
// {
//   let variable = "block scope";
//   let variable = "duplicated";

//   console.log(variable);
// }

// 3.
{
  console.log(variable);
  let variable = 'hoisted';
}
