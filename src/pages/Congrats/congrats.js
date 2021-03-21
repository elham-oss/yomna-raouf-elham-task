import { Avatar } from "../../components/Avatar/Avatar"
import "./congrats.css"

const congrats = () => {
    return (
      <div className="congrats">
        <div className="congrats__container">
          <p className="congrats__msg">
            تهانينا ! قد أجبت على كافة الأسئلة بصورة صحيحة إليك 50 نقطة إضافية
            في حسابك
          </p>
          <div className="congrats__user">
            <Avatar />
            <p className="congrats__userName">محمد أحمد</p>
          </div>
          <div className="congrats__score">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36">
              <path
                id="Icon_awesome-coins"
                data-name="Icon awesome-coins"
                d="M0,28.5v3C0,33.982,6.047,36,13.5,36S27,33.982,27,31.5v-3c-2.9,2.046-8.212,3-13.5,3S2.9,30.544,0,28.5ZM22.5,9C29.953,9,36,6.982,36,4.5S29.953,0,22.5,0,9,2.018,9,4.5,15.047,9,22.5,9ZM0,21.122V24.75c0,2.482,6.047,4.5,13.5,4.5S27,27.232,27,24.75V21.122c-2.9,2.391-8.22,3.628-13.5,3.628S2.9,23.513,0,21.122Zm29.25.773C33.279,21.115,36,19.666,36,18V15a17.267,17.267,0,0,1-6.75,2.426ZM13.5,11.25C6.047,11.25,0,13.767,0,16.875S6.047,22.5,13.5,22.5,27,19.983,27,16.875,20.953,11.25,13.5,11.25Zm15.42,3.959c4.219-.759,7.08-2.25,7.08-3.959v-3c-2.5,1.765-6.785,2.714-11.3,2.939A7.874,7.874,0,0,1,28.92,15.209Z"
                fill="#c16d0d"
              />
            </svg>
            <p>730 نقطة</p>
          </div>
        </div>
      </div>
    );
}

export  {congrats}
