# Countdown Timer Component
This components shows the remaining time (in days, hours, minutes or seconds) to a given date

## A few examples on how to use this component

### From days to seconds
```
<app-countdown-timer class="item-countdown" [end]="details?.expirationDate" [units]="{from: 'day', to: 'second'}"></app-countdown-timer>
```

### From days to minutes
```
<app-countdown-timer class="item-countdown" [end]="details?.expirationDate" [units]="{from: 'day', to: 'minute'}"></app-countdown-timer>
```

### From hours to seconds
```
<app-countdown-timer class="item-countdown" [end]="details?.expirationDate" [units]="{from: 'hour', to: 'second'}"></app-countdown-timer>
```

### From hours to minutes
```
<app-countdown-timer class="item-countdown" [end]="details?.expirationDate" [units]="{from: 'hour', to: 'minute'}"></app-countdown-timer>
```

### From minutes to seconds
```
<app-countdown-timer class="item-countdown" [end]="details?.expirationDate" [units]="{from: 'minute', to: 'second'}"></app-countdown-timer>
```

### Just days
```
<app-countdown-timer class="item-countdown" [end]="details?.expirationDate" [units]="{from: 'day', to: 'day'}"></app-countdown-timer>
```

### Just hours
```
<app-countdown-timer class="item-countdown" [end]="details?.expirationDate" [units]="{from: 'hour', to: 'hour'}"></app-countdown-timer>
```

### Just minutes
```
<app-countdown-timer class="item-countdown" [end]="details?.expirationDate" [units]="{from: 'minute', to: 'minute'}"></app-countdown-timer>
```

### Just seconds
```
<app-countdown-timer class="item-countdown" [end]="details?.expirationDate" [units]="{from: 'second', to: 'second'}"></app-countdown-timer>
```
