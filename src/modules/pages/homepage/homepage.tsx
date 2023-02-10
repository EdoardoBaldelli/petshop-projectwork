import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../../../model/animal";
import { AnimalCard } from "../../components/animal-card";
import { AnimalImg } from "../../components/animal-img";
import { URL } from "../../../contants";

type TanimalState = {
  animals: IAnimal[] | null;
  error: boolean;
  loading: boolean;
};

export const Homepage = () => {
  const [animalState, setAnimalState] = useState<TanimalState>({
    animals: null,
    error: false,
    loading: false,
  });

  const fetchAnimal = async () => {
    setAnimalState({ ...animalState, loading: true });
    console.log("ttttttttttt");
    try {
      const res = await axios.get(`${URL}/animal`);
      const data: IAnimal[] = res.data;
      setAnimalState({ ...animalState, animals: data, loading: false });
    } catch (e) {
      console.log(e);
      setAnimalState({ ...animalState, error: true, loading: false });
    }
  };

  useEffect(() => {
    console.log("ssssssssss");
    fetchAnimal();
  }, []);

  return (
    <div className="homepage">
      <div className="title">
        <h1>Our little friends</h1>
      </div>
      <div className="animals-home">
        {animalState.animals?.map((animal) => (
          <AnimalImg key={animal._id} animal={animal} />
        ))}
      </div>
      <div className="about-us">
        <h1>Something about us: seller of friendship</h1>
        <div className="our-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nemo igitur
          esse beatus potest. Ita fit cum gravior, tum etiam splendidior oratio.
          Quid enim de amicitia statueris utilitatis causa expetenda vides. Sed
          quod proximum fuit non vidit. Ut optime, secundum naturam affectum
          esse possit. Id Sextilius factum negabat. Tollenda est atque
          extrahenda radicitus. Huius ego nunc auctoritatem sequens idem faciam.
          Idem iste, inquam, de voluptate quid sentit? Ut aliquid scire se
          gaudeant? Id enim natura desiderat. Venit ad extremum; Duo Reges:
          constructio interrete. Qua ex cognitione facilior facta est
          investigatio rerum occultissimarum. Si quae forte-possumus. Teneo,
          inquit, finem illi videri nihil dolere. Dat enim intervalla et
          relaxat. Omnes enim iucundum motum, quo sensus hilaretur.
        </div>
      </div>
      <div className="brand">
        <h1>Our partner in crime: of love obv</h1>
        <div className="brand-img">
          <div className="img-desc1">
            <img
              src="https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg"
              alt="brand img"
            />
            <p>
              brand of life:Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Respondeat totidem verbis. Tubulo putas dicere? Age sane,
              inquam. Hic nihil fuit, quod quaereremus. Murenam te accusante
              defenderem. Honesta oratio, Socratica, Platonis etiam. Duo Reges:
              constructio interrete
            </p>
          </div>
          <div className="img-desc2">
            <img
              src="https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg"
              alt="brand img"
            />
          </div>
          <div className="img-desc3">
            <p>
              brand of life:brand of life:Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Respondeat totidem verbis. Tubulo
              putas dicere? Age sane, inquam. Hic nihil fuit, quod quaereremus.
              Murenam te accusante defenderem. Honesta oratio, Socratica,
              Platonis etiam. Duo Reges: constructio interrete
            </p>
            <img
              src="https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg"
              alt="brand img"
            />
          </div>
        </div>
        <div className="contacts">
          <h3>You can find us here</h3>
          <div className="contact-link">
            <a href="#">conatcts</a>
            <a href="#">socials</a>
            <a href="#">news</a>
          </div>
        </div>
      </div>
    </div>
  );
};
