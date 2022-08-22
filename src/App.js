import { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { listeyeEkle, isaretle, temizle } from "./actions";

const App = (props) => {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          onClick={() => {
            props.listeyeEkle(text);
            setText("");
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.list.map((item) => (
          <div
            className={item.tamamlandi ? "yapildi" : ""}
            key={item.id}
            onClick={() => props.isaretle(item.id)}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button className="temizle" onClick={() => props.temizle()}>
        Tamamlananları Temizle
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, { listeyeEkle, isaretle, temizle })(
  App
);
