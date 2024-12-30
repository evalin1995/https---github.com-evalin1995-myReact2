import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react"

import { LiaWindowClose, LiaArrowsAltSolid } from "react-icons/lia";

// useState最先導入

export default function App() {
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const question = [
    {
      id: 1,
      question: 'Q1',
      answer: 'A1',
      url: './images/01.jpg',
    },
    {
      id: 2,
      question: 'Q2',
      answer: 'A2',
      url: './images/02.jpg',
    }, {
      id: 3,
      question: 'Q3',
      answer: 'A3',
      url: './images/03.jpg',
    },
  ];
  return (
    // 最外層
    <div className="wrapper" style={{
      background: '#10375C',
      maxWidth: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: "flex-start",
      color: '#F4F6FF'
    }}>
      {/* faq區 */}
      <div className="faq" style={{
        marginTop: 50,
        color: '#10375C',
        background: '#F4F6FF',
        width: '80%',
        textAlign: 'center',
        height: 500,
        height: '100%'
      }}>
        <h2>FAQ列表</h2>
        {question.map((q) => {
          return (
            <div key={q.id} style={{
              marginBottom: 5,
              padding: '0 50px',
              textAlign: 'left'

            }}>
              <button style={{
                background: '#F3C623',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '5px 10px',
                border: 'none',
                fontSize: '1.4em'
              }}
                onClick={() => setActiveQuestionId(activeQuestionId === q.id ? null : q.id)}
              >
                {/* 帶出題目 */}
                {q.question}
                {/* 展開關閉鈕 */}
                {
                  activeQuestionId === q.id
                    ? <LiaWindowClose />
                    : <LiaArrowsAltSolid />
                }

              </button>
              {/* 摺疊鈕動畫 */}
              <AnimatePresence>
                {
                  // 作用中id和被展開的id相同時
                  activeQuestionId === q.id && (
                    <motion.div
                      // 無:收合狀態
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1, height: 'auto'
                        // 'calc(1rem + 10px)'
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{
                        border: '2px solid #F3C623',
                        padding: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        fontSize: '1.2em'

                      }}
                    >
                      {q.answer}<img src={q.url}
                        style={{
                          width: '100%',
                          // height:50,
                          height: 300,
                          objectFit: 'cover'
                        }}></img>
                    </motion.div>
                  )
                }
              </AnimatePresence>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}