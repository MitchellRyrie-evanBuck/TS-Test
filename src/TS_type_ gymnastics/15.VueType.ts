type Computed<T> = T extends Record<string, (...args: any[]) => any>
  ? { [P in keyof T]: ReturnType<T[P]> }
  : never
declare function SimpleVue<D, C, M>(options: {
  data: (this: never) => D
  computed: C & ThisType<D & Computed<C> & M>
  methods: M & ThisType<D & Computed<C> & M>
}): any

SimpleVue({
  data() {
    return { Beep: "Boop" };
  },
  computed: {
    message(){
      return this.Beep + " <3";
    },
  },
  methods: {
    beep() {
      console.log(this.message);
    },
  },
});