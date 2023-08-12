function print_contact() {
    alert('skype: helper \n telegram: @helper \n tel:8995345235')
}

a = document.getElementById('text1');
a.style.color = 'red';
a.style.fontFamily = 'Roboto';

b = document.getElementById('button1, button2, button3, button4, button5');
b.style.backgroundColor = 'red';
b.style.borderRadius = '0px';
b.style.padding = '20px';

// function on_enter() {
//     b = document.getElementById('button1');
//     b.style.backgroundColor = 'red';
//     b.style.borderRadius = '0px';
//     b.style.padding = '20px';
// }

// function on_leave() {
//     b = document.getElementById('button1');
//     b.style.backgroundColor = 'red';
//     b.style.borderRadius = '15px';
//     b.style.padding = '10px';
// }

function change_style1() {
    b = document.getElementById('button1');
    if (window.getComputedStyle(b).backgroundColor == 'rgb(255, 0, 0)') {
        b.style.backgroundColor = 'green';
    } else
        b.style.backgroundColor = 'red';

    if (window.getComputedStyle(b).borderRadius != '0px') {
        b.style.borderRadius = '0px';
    } else
        b.style.borderRadius = '10px';
    if (window.getComputedStyle(b).padding != '20px') {
        b.style.padding = '20px';
    } else
        b.style.padding = '5px';
}

function change_style2() {
    b = document.getElementById('button2');
    if (window.getComputedStyle(b).backgroundColor == 'rgb(255, 0, 0)') {
        b.style.backgroundColor = 'green';
    } else
        b.style.backgroundColor = 'red';

    if (window.getComputedStyle(b).borderRadius != '0px') {
        b.style.borderRadius = '0px';
    } else
        b.style.borderRadius = '10px';
    if (window.getComputedStyle(b).padding != '20px') {
        b.style.padding = '20px';
    } else
        b.style.padding = '5px';
}

function change_style3() {
    b = document.getElementById('button3');
    if (window.getComputedStyle(b).backgroundColor == 'rgb(255, 0, 0)') {
        b.style.backgroundColor = 'green';
    } else
        b.style.backgroundColor = 'red';

    if (window.getComputedStyle(b).borderRadius != '0px') {
        b.style.borderRadius = '0px';
    } else
        b.style.borderRadius = '10px';
    if (window.getComputedStyle(b).padding != '20px') {
        b.style.padding = '20px';
    } else
        b.style.padding = '5px';
}

function change_style4() {
    b = document.getElementById('button4');
    if (window.getComputedStyle(b).backgroundColor == 'rgb(255, 0, 0)') {
        b.style.backgroundColor = 'green';
    } else
        b.style.backgroundColor = 'red';

    if (window.getComputedStyle(b).borderRadius != '0px') {
        b.style.borderRadius = '0px';
    } else
        b.style.borderRadius = '10px';
    if (window.getComputedStyle(b).padding != '20px') {
        b.style.padding = '20px';
    } else
        b.style.padding = '5px';
}

function change_style5() {
    b = document.getElementById('button5');
    if (window.getComputedStyle(b).backgroundColor == 'rgb(255, 0, 0)') {
        b.style.backgroundColor = 'green';
    } else
        b.style.backgroundColor = 'red';

    if (window.getComputedStyle(b).borderRadius != '0px') {
        b.style.borderRadius = '0px';
    } else
        b.style.borderRadius = '10px';
    if (window.getComputedStyle(b).padding != '20px') {
        b.style.padding = '20px';
    } else
        b.style.padding = '5px';
}

// function style_change() {
//     a = parseFloat( prompt('Введите первое число:'));
//     b = parseFloat( prompt('Введите второе число:'));
//     el = document.getElementById('text1');
//     if (window.getComputedStyle(el).color == 'rgb(255, 0, 0)')
//     {
//         el.style.backgroundColor = 'green';
//     }
//     else
//         el.style.backgroundColor = 'red';
//     if (a>b)
//     {
//         alert('наибольшее A')
//     }
//     else
//         alert('наибольшее B')
// }

function test() {
    // var arr = ['apple', 'orange', 'kiwi', 'pear', 'melon']
    // arr[3]='Груша'
    // alert(arr)
    // alert(arr.length)

    for (let i = 0; i < 3; i++)
    {
        alert(i);
    }
}
function show_modal() {
    var modal = document.getElementById("Modal_window")
    if (window.getComputedStyle(modal).display == 'none')
    {
        modal.style.display = 'block'
    }
    else
        modal.style.display = 'none'

}

function show_modal1() {
    var modal = document.getElementById("Modal_window_present")
    if (window.getComputedStyle(modal).display == 'none')
    {
        modal.style.display = 'block'
    }
    else
        modal.style.display = 'none'
}

function star(k) {

    var ids = ["star_f_1", 
    "star_f_2",
    "star_f_3",
    "star_f_4",
    "star_f_5" ];

    for (let i=0; ids.length; i++)
    {
        b = ids[i]
        a = document.getElementById(b);
        a.src="images/star_1.png";
    }

}

function show_star(k) {
    k=k-1
    var ids = ["star_f_1", "star_f_2", "star_f_3", "star_f_4", "star_f_5" ];
    
    b = ids[k]
    a = document.getElementById(b);

    if (a.src.indexOf("images/star_2.png")>-1)
    {
        for (let i=0 ; i<=k ; i++)
        {
            b = ids[i]
            a = document.getElementById(b);
            a.src="images/star_1.png"
        }
    }

    else
    {
        for (let i=0; i<ids.length; i++)
        {
            if (i>k)
            {
                b = ids[i];
                a = document.getElementById(b);
                a.src='images/star_2.png'
            }
        }
    }
}

function hide() {
    document.getElementById('present').style.opacity = 1;
    setTimeout(hide, 5000)
}

function valid_form() {
    let name = document.getElementById("input_name")
    let fam = document.getElementById("input_fam")
    let mail = document.getElementById("input_mail")
    let phone = document.getElementById("input_phone")
    alert(name.value)
    // alert(fam.value)

    // document.getElementById("sp").innerHTML = "Имя" + name.value
    if (name=="" || name==" ")
    {
        document.getElementById("sp").innerHTML = "Введите имя"
    }

    if (fam=="" || fam==" ")
    {
        document.getElementById("sp").innerHTML = "Введите фамилию"
    }

    if (mail.indexOf("@")== -1)
    {
        document.getElementById("sp").innerHTML = "Вы не ввели почту"
    }
}
function random(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
function rand_tshirt() {
    var arr = ["imges/photo.png", "images/photo_1.png"]
    var id_img = ["ts_1", "ts_2"]

    for (let i = 0; i<id_img.length; i++) {
        c = document.getElementById(id_img[i]);
        img = RandomElement(arr);
        c.src = img;
    }
}

