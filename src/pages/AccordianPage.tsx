import Accordian from "../components/Accordian";


const AccordianPage = () => {

    const items = [
        {
            id: "fsdfs",
            label: "What is Java?",
            content: "Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies."
        },
        {
            id: "wrfd",
            label: "What is React?",
            content: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. "
        },
        {
            id: "uioy",
            label: "What is TypeScript?",
            content: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript."
        }
    ]

  return (
    <Accordian items={items}/>
  )
}

export default AccordianPage;