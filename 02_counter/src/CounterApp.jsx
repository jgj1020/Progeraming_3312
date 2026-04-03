import

function CounterApp() {
    //const: 현재 또는 잊ㄴ 상태 값; setCount(): 상태값 변경 함수 
    const [counter, setCount] = useState(0)

    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        {/*<button 
        className="counter"
        onClick={() => setCount((count) => count + 1)}
        >
        Count is {counter}
        </button> */}
        </>
  )
}