
var QUESTIONS = {
  "logo" : {
    question : "LOGO",
    choices : [
      {
        choice : "A Sans Serif, maybe?",
        answer : {
          question : "You like geometrics?",
          choices : [
            {
              choice : "Yes",
              answer : {
                question : "Do you like Futura?",
                choices : [
                  {
                    choice : "Yes",
                    answer : {
                      font : "Futura"
                    }
                  },
                  {
                    choice : "No",
                    answer : {
                      font : "Metro"
                    }
                  }
                ]
              }
            },
            {
              choice : "No",
              answer : {
                question : "A Neo-grotesk perhaps?",
                choices : [
                  {
                    choice : "Yes",
                    answer : {
                      question : "If I say \"science fiction movies are my favourite\"",
                      choices : [
                        {
                          choice : "Good",
                          answer : {
                            font : "Eurostile"
                          }
                        },
                        {
                          choice : "Bad",
                          answer : {
                            font : "Helvetica"
                          }
                        }
                      ]
                    }
                  },
                  {
                    choice : "No",
                    answer : {
                      question : "Something humanistic then?",
                      choices : [
                        {
                          choice : "Yes",
                          answer : {
                            question : "Do you like the look of Adobe?",
                            choices : [
                              {
                                choice : "Yes",
                                answer : {
                                  font : "Myriad"
                                }
                              },
                              {
                                choice : "No",
                                answer : {
                                  font : "Frutiger"
                                }
                              }
                            ]
                          }
                        },
                        {
                          choice : "No",
                          answer : {
                            question : "How about something classic?",
                            choices : [
                              {
                                choice : "Yes",
                                answer : {
                                  font : "Akzidenz Grotesk"
                                }
                              },
                              {
                                choice : "No",
                                answer : {
                                  question : "Then we only have something decorative",
                                  choices : [
                                    {
                                      choice : "OK",
                                      answer : {
                                        font : "Peignot"
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        choice : "or perhaps a serif?",
        answer : {
          question : "How does the words semi-sans, semi-serif sound?",
          choices : [
            {
              choice : "Good",
              answer : {
                font : "Rotis"
              }
            },
            {
              choice : "Bad",
              answer : {
                question : "Something new, got serifs, got sans?",
                choices : [
                  {
                    choice : "Good",
                    answer : {
                      font : "Fedra"
                    }
                  },
                  {
                    choice : "Bad",
                    answer : {
                      question : "Is it an Italian Restaurant?",
                      choices : [
                        {
                          choice : "Yes",
                          answer : {
                            font : "Bodoni"
                          }
                        },
                        {
                          choice : "No",
                          answer : {
                            question : "Got a whole bunch of office correspondence?",
                            choices : [
                              {
                                choice : "Yes",
                                answer : {
                                  font : "Lexicon"
                                }
                              },
                              {
                                choice : "No",
                                answer : {
                                  question : "Here we have a classic waiting for you",
                                  choices : [
                                    {
                                      choice : "OK",
                                      answer : {
                                        font : "Palatino"
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  "invitation" : {
    question : "Like something handwritten, do you?",
    choices : [
      {
        choice : "Yes",
        answer : {
          question : "Something calligraphic, maybe?",
          choices : [
            {
              choice : "Yes",
              answer : {
                font : "Zapfino"
              }
            },
            {
              choice : "No",
              answer : {
                font : "FF Erikrighthand"
              }
            }
          ]
        }
      },
      {
        choice : "No",
        answer : {
          question : "How about something a bit fancy?",
          choices : [
            {
              choice : "Yes",
              answer : {
                question : "Hairlines",
                choices : [
                  {
                    choice : "Thin Hairlines",
                    answer : {
                      font : "Bodoni"
                    }
                  },
                  {
                    choice : "Thinner Hairlines",
                    answer : {
                      question : "Readability?",
                      choices : [
                        {
                          choice : "Yes",
                          answer : {
                            font : "Walbaum"
                          }
                        },
                        {
                          choice : "No",
                          answer : {
                            font : "Didot"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              choice : "No",
              answer : {
                question : "Something fun, then?",
                choices : [
                  {
                    choice : "Yes",
                    answer : {
                      question : "Are you alone?",
                      choices : [
                        {
                          choice : "Yes",
                          answer : {
                            question : "Ok then, come with me",
                            choices : [
                              {
                                choice : "Ok",
                                answer : {
                                  font : "Comic Sans"
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  "newspaper" : {
    question : "Newspaper",
    choices : [
      {
        choice : "Text face",
        answer : {
          question : "Do people call you boring from time to time?",
          choices : [
            {
              choice : "Yes",
              answer : {
                font : "Times"
              }
            },
            {
              choice : "No",
              answer : {
                question : "How about something heavily used?",
                choices : [
                  {
                    choice : "Yes",
                    answer : {
                      font : "Miller"
                    }
                  },
                  {
                    choice : "No",
                    answer : {
                      question : "How does relighting the american tradition sound?",
                      choices : [
                        {
                          choice : "Good",
                          answer : {
                            font : "Proforma"
                          }
                        },
                        {
                          choice : "Bad",
                          answer : {
                            font : "Arnhem"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        choice : "Display",
        answer : {
          question : "Do you like it traditional?",
          choices : [
            {
              choice : "Yes",
              answer : {
                question : "Do you like the type on highways?",
                choices : [
                  {
                    choice : "Yes",
                    answer : {
                      question : "Ok, to a question of age",
                      choices : [
                        {
                          choice : "New",
                          answer : {
                            font : "Interstate"
                          }
                        },
                        {
                          choice : "Old",
                          answer : {
                            font : "Franklin Gothic"
                          }
                        }
                      ]
                    }
                  },
                  {
                    choice : "No",
                    answer : {
                      question : "It's ok with you if it's Swiss?",
                      choices : [
                        {
                          choice : "Yes",
                          answer : {
                            font : "Helvetica"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              choice : "No",
              answer : {
                question : "Something modern, yet plainspoken",
                choices : [
                  {
                    choice : "Yes",
                    answer : {
                      font : "Gotham"
                    }
                  },
                  {
                    choice : "No",
                    answer : {
                      question : "Not afraid to be asked if you live in the nineties?",
                      choices : [
                        {
                          choice : "Yes",
                          answer : {
                            font : "Helvetica"
                          }
                        },
                        {
                          choice : "No",
                          answer : {
                            font : "FF Meta"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        choice : "Combination",
        answer : {
          question : "Think Mr. Spiekermann is mostly right?",
          choices : [
            {
              choice : "Yes",
              answer : {
                font : "Arnhem"
              }
            },
            {
              choice : "No",
              answer : {
                question : "Mmm. Spiky serifs are nice",
                choices : [
                  {
                    choice : "Ok",
                    answer : {
                      font : "Swift"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  "book" : {
    question : "Are you completely in doubt?",
    choices : [
      {
        choice : "Yes",
        answer : {
          font : "Caslon"
        }
      },
      {
        choice : "No",
        answer : {
          question : "A champion in usability, perhaps?",
          choices : [
            {
              choice : "Yes",
              answer : {
                font : "Minion"
              }
            },
            {
              choice : "No",
              answer : {
                question : "Everybody loves Garamond",
                choices : [
                  {
                    choice : "Yes",
                    answer : {
                      question : "But perhaps one would want a larger eye?",
                      choices : [
                        {
                          choice : "Yes",
                          answer : {
                            font : "Sabon"
                          }
                        },
                        {
                          choice : "No",
                          answer : {
                            font : "Garamond"
                          }
                        }
                      ]
                    }
                  },
                  {
                    choice : "No",
                    answer : {
                      question : "So you want a sans serif, is that the case?",
                      choices : [
                        {
                          choice : "Yes",
                          answer : {
                            font : "Optima"
                          }
                        },
                        {
                          choice : "No",
                          answer : {
                            question : "What is your opinion of Eric Grill",
                            choices : [
                              {
                                choice : "Good",
                                answer : {
                                  font : "Joanna"
                                }
                              },
                              {
                                choice : "Bad",
                                answer : {
                                  question : "Humanistic forms please your eye?",
                                  choices : [
                                    {
                                      choice : "Yes",
                                      answer : {
                                        question : "Ok to a question of food",
                                        choices : [
                                          {
                                            choice : "Gouda",
                                            answer : {
                                              font : "FF Scala"
                                            }
                                          },
                                          {
                                            choice : "Emmental",
                                            answer : {
                                              font : "Syntax"
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      choice : "No",
                                      answer : {
                                        font : "Baskerville"
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  "infographic" : {
    question : "We all like something very condensed, right?",
    choices : [
      {
        choice : "Yes",
        answer : {
          font : "Univers"
        }
      },
      {
        choice : "No",
        answer : {
          question : "Got a lot of tables, have you?",
          choices : [
            {
              choice : "Yes",
              answer : {
                font : "Letter Gothic"
              }
            },
            {
              choice : "No",
              answer : {
                question : "You cried when watching Terminator",
                choices : [
                  {
                    choice : "Yes",
                    answer : {
                      font : "OCR"
                    }
                  },
                  {
                    choice : "No",
                    answer : {
                      font : "FF DIN"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
};
