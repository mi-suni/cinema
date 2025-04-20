import style from "./[id].module.css";

const mockData = {
  id: 1,
  title: "미키 17",
  releaseDate: "2025-02-28",
  company: "워너 브라더스 코리아",
  genres: ["모험", "드라마", "SF", "코미디"],
  subTitle: "당신은 몇 번째 미키입니까?",
  description:
    "“당신은 몇 번째 미키입니까?” 친구 ‘티모’와 함께 차린 마카롱 가게가 쫄딱 망해 거액의 빚을 지고 못 갚으면 죽이겠다는 사채업자를 피해 지구를 떠나야 하는 ‘미키’. 기술이 없는 그는, 정치인 ‘마셜’의 얼음행성 개척단에서 위험한 일을 도맡고, 죽으면 다시 프린트되는 익스펜더블로 지원한다. 4년의 항해와 얼음행성 니플하임에 도착한 뒤에도 늘 ‘미키’를 지켜준 여자친구 ‘나샤’. 그와 함께, ‘미키’는 반복되는 죽음과 출력의 사이클에도 익숙해진다. 그러나 ‘미키 17’이 얼음행성의 생명체인 ‘크리퍼’와 만난 후 죽을 위기에서 돌아와 보니 이미 ‘미키 18’이 프린트되어 있다. 행성 당 1명만 허용된 익스펜더블이 둘이 된 ‘멀티플’ 상황. 둘 중 하나는 죽어야 하는 현실 속에 걷잡을 수 없는 사건이 기다리고 있었으니… “자알 죽고, 내일 만나”",
  runtime: 137,
  posterImgUrl:
    "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250207_265%2F1738893336962Cn1Vd_JPEG%2Fmovie_image.jpg",
};

export default function Page() {
  const {
    id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = mockData;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.releaseDate}>
        {releaseDate} / {genres} / {runtime}분
      </div>
      <div className={style.company}>{company}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
