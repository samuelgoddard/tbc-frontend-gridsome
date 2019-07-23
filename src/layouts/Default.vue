<template>
  <div class="container mx-auto">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/edit">edit</g-link>
        <g-link class="nav__link" to="/style">style</g-link>
        <g-link class="nav__link" to="/about">about</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
