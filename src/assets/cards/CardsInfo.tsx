import retail__1 from "assets/img/projects/projectRetail/retail__1.jpg";
import retail__2 from "assets/img/projects/projectRetail/retail__2.jpg";
import retail__3 from "assets/img/projects/projectRetail/retail__3.jpg";

import office__1 from "assets/img/projects/projectOffice/office__1.jpg";
import office__2 from "assets/img/projects/projectOffice/office__2.jpg";
import office__3 from "assets/img/projects/projectOffice/office__3.jpg";

import bank__1 from "assets/img/projects/projectBank/bank__1.jpg";
import bank__2 from "assets/img/projects/projectBank/bank__2.jpg";
import bank__3 from "assets/img/projects/projectBank/bank__3.jpg";

const retailImages: string[] = [retail__1, retail__2, retail__3];
const officeImages: string[] = [office__1, office__2, office__3];
const bankImages: string[] = [bank__1, bank__2, bank__3];

const retailDescription = (): JSX.Element => {
  return (
    <div>
      <p>
        Установка системы видеонаблюдения и систем пожарной безопасности в
        продуктовом магазине Монеточка.
      </p>
      <p>Пятигорск, ул. Ленина, д. 33.</p>
    </div>
  );
};

const officeDescription = (): JSX.Element => {
  return (
    <div>
      <p>
        Установка системы видеонаблюдения и систем пожарной безопасности в
        офисах филиала НефтеГазПотока.
      </p>
      <p>Суворовская, ул. 9 Января, д. 2.</p>
    </div>
  );
};

const bankDescription = (): JSX.Element => {
  return (
    <div>
      <p>
        Установка наружной и внутренней системы видеонаблюдения в отделении
        КавказБанка.
      </p>
      <p>
        Система видеонаблюдения протестирована в различных сценариях.
        Установлены системы контроля доступа: электронные замки и другие
        механизмы.
      </p>
      <p>Минеральные Воды, ул. Промышленная, д. 12.</p>
    </div>
  );
};

interface ICardInfo {
  images: string[];
  title: string;
  description: JSX.Element;
}

export const retailCardInfo: ICardInfo = {
  images: retailImages,
  title: 'Магазин "Монеточка"',
  description: retailDescription(),
};

export const officeCardInfo: ICardInfo = {
  images: officeImages,
  title: 'Офисы "НефтеГазТока"',
  description: officeDescription(),
};

export const bankCardInfo: ICardInfo = {
  images: bankImages,
  title: 'Отделение "КавказБанка"',
  description: bankDescription(),
};
