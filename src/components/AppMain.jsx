import AppAlert from "./AppAlert";
import AppCard from "./AppCard";
export default function AppMain({products}) {




  function renderCards() {
    // use a function to render the markup items instead? how?
  }

  return (
    <main>
      <div className="container">

{/*         <AppAlert type={'primary'}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet est pariatur voluptatem voluptates id quidem aut, deserunt tempora perspiciatis provident soluta sapiente ducimus obcaecati recusandae quae autem tempore quo.
          </p>
        </AppAlert> */}

        <AppAlert content={'This is another alert'} type={'danger'}>
          <ul>
            <li>Erroro1</li>
            <li>Erroro1</li>
            <li>Erroro1</li>

          </ul>
        </AppAlert>



        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

          {
            products.map(product => (


              <AppCard title={product.title} image={product.src} time={product.time} type={product.type} key={product.id} />

            ))
          }

        </div>

      </div>
    </main>
  )
}