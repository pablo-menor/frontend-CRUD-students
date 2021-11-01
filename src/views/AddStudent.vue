<template>
  <div class="add-container">
    
    <form  class = "form-student" action="http://localhost:3000/save"  method="POST">
        <input id="name" type="text" placeholder="Name" name="name" required>
        <input id="lastname" type="text" placeholder="Last Name" name="lastname" required>
        <input id="course" type="text" placeholder="Course" name="course">
        <div class="buttons">
            <button type="submit" ><i class="fas fa-plus-square addButton"></i></button>
            <router-link to="/"><i class="fas fa-times go-back"></i></router-link>
            
        </div>  
    </form>
</div>  
</template>

<style lang="scss" scoped>
  .add-container{

 
   form{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
   }
    input{
        text-align: center;
        outline: none;
        padding: 5px;
        border: none;
        border-bottom: 1.5px solid #1976d2;
        margin-bottom: 15px;
    }
    button{
        background-color: #fafafa;
        outline: none;
        border: none;
    }
    .buttons{
        margin-top: 20px;

        .addButton{
            color: #00b40f;
            margin-left: 5px;
            font-size: 2.4rem;
            margin-right: 30px;
        }
        .go-back{
            color: #ff0707;
            font-size: 2.4rem;
       
        }
    }

}
</style>
