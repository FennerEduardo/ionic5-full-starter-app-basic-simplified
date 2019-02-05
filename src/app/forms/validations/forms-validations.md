# TODO

Para las validaciones explicar que si bien se puede hacer de esta forma (como lo haciamos antes en auth)
```
<div class="error-container" *ngIf="loginForm.get('email').invalid && (loginForm.get('email').dirty || loginForm.get('email').touched)">
  <span *ngIf="loginForm.get('email').errors.required">
    Email is required
  </span>
  <span *ngIf="loginForm.get('email').errors.pattern">
    Please enter a valid email address
  </span>
</div>
```

Es mejor hacerlo de forma dinamica (para poder agregar o sacar validaciones sin tener que modificar el html)
```
validation_messages = {
  'email': [
    { type: 'required', message: 'Email is required.' },
    { type: 'pattern', message: 'Enter a valid email.' }
  ],
  'password': [
    { type: 'required', message: 'Password is required.' },
    { type: 'minlength', message: 'Password must be at least 5 characters long.' }
  ]
};
```

```
<div class="error-container">
  <ng-container *ngFor="let validation of validation_messages.email">
    <div class="error-message" *ngIf="loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)">
      <ion-icon name="information-circle-outline"></ion-icon>
      <span>{{ validation.message }}</span>
    </div>
  </ng-container>
</div>
```
