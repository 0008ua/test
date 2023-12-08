import { Observable, of, forkJoin } from 'rxjs';
import { map, switchMap, catchError, combineAll, mergeMap } from 'rxjs/operators';

const first$ = (x: string) => of('first ' + x);
const second$ = (x: string) => of('second ' + x);

of('initial').pipe(
  map(result => {
    console.log('result', result)
    return result + ' ..added';
  }),
  mergeMap(x =>
    // combineLatest (   // emits new value after each completed (emit after each)
    forkJoin(   // emits value after all completed (wait all)
      first$(x),
      second$(x)
    )
  )

)
  .subscribe(
    final => console.log('final', final)
  );
