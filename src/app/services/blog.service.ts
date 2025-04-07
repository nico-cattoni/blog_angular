import { Injectable } from '@angular/core';
import { IPost, ICategory } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: IPost[] = [
    {
      id: 1,
      title: 'Viaje a la playa',
      text: 'El sol brillaba intensamente cuando llegamos a la playa de arena blanca. Las olas susurraban su canción eterna mientras caminábamos por la orilla, dejando huellas efímeras que el mar borraba con ternura. Pasamos días construyendo castillos de arena con los niños, buceando entre coloridos peces tropicales y disfrutando de atardeceres que pintaban el cielo de tonos dorados y rosados. Las noches eran mágicas, con cenas de mariscos frescos bajo las estrellas. Este paraíso terrenal nos regaló momentos de conexión con la naturaleza y con nosotros mismos que atesoraremos por siempre.',
      author: 'Juan Pérez',
      image: 'https://media.gq.com.mx/photos/620e915c43f71a078a35533f/master/pass/playa.jpg',
      date: new Date('2023-06-15'),
      category: { id: 1, title: 'Playa' }
    },
    {
      id: 2,
      title: 'Aventura en la montaña',
      text: 'El ascenso comenzó al amanecer, con el aire fresco llenando nuestros pulmones. Cada paso sobre las rocas nos acercaba más a las nubes. A media mañana, descubrimos un valle escondido donde las águilas volaban en círculos. El último tramo fue el más desafiante, pero al alcanzar la cima, toda fatiga desapareció ante la vista panorámica de picos nevados y valles infinitos. Acampamos en un refugio natural, donde compartimos historias junto al fuego bajo un manto de estrellas. Esa noche aprendimos que las montañas no se conquistan, sino que nos permiten descubrir nuestra propia fuerza interior.',
      author: 'Ana Gómez',
      image: 'https://www.lidaplantresearch.com/wp-content/uploads/2020/05/dia_internacional_de_las_monta%C3%B1as.jpg',
      date: new Date('2023-07-20'),
      category: { id: 2, title: 'Montaña' }
    },
    {
  id: 3,
  title: 'Aventura urbana en la gran ciudad',
  text: 'La ciudad nunca duerme, y nosotros tampoco durante esta increíble semana. Desde mercados callejeros llenos de colores y aromas exóticos hasta rascacielos que desafían las nubes. Cada barrio tenía su propia personalidad: el distrito financiero con su ritmo frenético, los barrios bohemios llenos de arte callejero, y los parques urbanos donde la naturaleza se abre paso entre el hormigón. Descubrimos pequeños cafés escondidos, galerías de arte vanguardista y miradores secretos con vistas espectaculares. La ciudad nos enseñó que la verdadera aventura está en perderse para encontrarse con lo inesperado.',
  author: 'Carlos Martínez',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3Ov1gQJTj-VtIs9ZZ2jLdV2fI5CEg_gpug&s',
  date: new Date('2023-08-22'),
  category: { id: 3, title: 'Ciudad' }
    },
    {
  id: 4,
  title: 'Retiro tranquilo en el campo',
  text: 'El silencio fue lo primero que nos sorprendió al llegar - un silencio vivo, interrumpido solo por el canto de los pájaros y el susurro del viento. Nuestros días transcurrían entre paseos por senderos bordeados de flores silvestres, tardes leyendo bajo la sombra de un roble centenario y noches observando constelaciones desconocidas en la ciudad. Aprendimos los ritmos de la naturaleza: madrugar con el gallo, cosechar verduras del huerto y hornear pan con harina recién molida. Esta experiencia nos recordó la belleza de lo simple y el valor de desconectar para reconectar con lo esencial.',
  author: 'Ana Rodríguez',
  image: 'https://inspyria.com/Themes/ETR/images/listado/shortcuts/casa-rural-para-retiros.png',
  date: new Date('2023-09-10'),
  category: { id: 4, title: 'Rural' }
    },
    {
  id: 5,
  title: 'Experiencia en el festival internacional',
  text: 'El festival era un universo en sí mismo - una ciudad efímera donde la creatividad no tenía límites. Desde el amanecer hasta el amanecer siguiente, vivimos entre performances surrealistas, conciertos que hacían vibrar la tierra y talleres que desafiaban nuestra imaginación. Conocimos artistas de veinte países, bailamos bajo lluvias de confeti multicolor y descubrimos nuevas formas de expresión artística. La energía colectiva era electrizante; miles de almas unidas por el amor al arte y la música. Esas noches mágicas nos transformaron, dejando huellas imborrables en nuestros corazones y mentes.',
  author: 'Laura Gómez',
  image: 'https://yourope.org/wp-content/uploads/2023/04/wacken-3-600x310.jpg',
  date: new Date('2023-07-30'),
  category: { id: 5, title: 'Festivales' }
}
  ];

  private categories: ICategory[] = [
    { id: 1, title: 'Playa' },
    { id: 2, title: 'Montaña' },
    { id: 3, title: 'Ciudad' },
    { id: 4, title: 'Rural' },
    { id: 5, title: 'Festivales' }
  ];

  constructor() { }

  getAll(): IPost[] {
    return [...this.posts];
  }

  getByCategory(categoryId: number): IPost[] {
    return this.posts.filter(post => post.category.id === categoryId);
  }

  getById(id: number): IPost | undefined {
    return this.posts.find(post => post.id === id);
  }

  getAllCategories(): ICategory[] {
    return [...this.categories];
  }

  insert(post: IPost): void {
    this.posts.push(post);
  }
}