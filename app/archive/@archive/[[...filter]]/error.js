"use client";

export default function FilterError({error}) {
  return (
    <div id="error">
      <h2>Une erreur est survenue !</h2>
      <p>{error.message}</p>
    </div>
  );
}
