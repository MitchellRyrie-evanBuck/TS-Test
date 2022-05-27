
export type Event = 
  | {
    type : "LOG_IN"
  } | 
  {
    type : "SIGN_OUT"
  }

// const sendEvent = ( EventType: Event["type"], payload?: any ) => {}
const sendEvent = <Type extends Event["type"] >(
  ...args: Extract<Event, {type: Type}> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload ]
    : [type: Type]
) => {}


/*
 * Correct
*/
sendEvent("SIGN_OUT")
sendEvent("LOG_IN",{
  userId: "1234"
})

/**
 * Should error
*/
sendEvent("SIGN_OUT",{})
sendEvent("SIGN_IN",{
  userId:123
})
sendEvent("LOG_IN",{})
sendEvent("LOG_IN")
